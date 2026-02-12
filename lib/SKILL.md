# Lib Directory - SKILL.md

## 📋 Overview

The `lib/` directory contains utility functions, shared logic, and helper modules used throughout DAKIA Academy. This includes database connections, authentication utilities, and content processing.

## 🎯 Purpose

- **Reusable Utilities**: Shared functions used across the application
- **Database Connections**: MongoDB connection management
- **Authentication**: Password hashing and JWT token handling
- **Content Processing**: Markdown to HTML conversion
- **Business Logic**: Core functionality abstracted from routes

## 📁 Structure

```
lib/
├── auth/
│   └── password.ts      # Password hashing with bcrypt
├── db/
│   └── mongoose.ts      # MongoDB connection singleton
└── markdown/
    └── converter.ts     # Markdown to HTML processing
```

## 🔧 Technical Skills Required

### 1. Database Connection Singleton
```tsx
// lib/db/mongoose.ts
import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }
  
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error('MONGODB_URI is not defined');
    }
    
    await mongoose.connect(dbUri);
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to database');
  }
}

export async function disconnectDB() {
  if (!isConnected) return;
  
  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error('MongoDB disconnection error:', error);
  }
}
```

### 2. Password Hashing with bcrypt
```tsx
// lib/auth/password.ts
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    console.error('Password hashing error:', error);
    throw new Error('Failed to hash password');
  }
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  } catch (error) {
    console.error('Password verification error:', error);
    throw new Error('Failed to verify password');
  }
}
```

### 3. JWT Token Utilities
```tsx
// lib/auth/jwt.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '7d';

interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function decodeToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.decode(token) as TokenPayload;
    return decoded;
  } catch (error) {
    console.error('Token decoding error:', error);
    return null;
  }
}
```

### 4. Markdown to HTML Conversion
```tsx
// lib/markdown/converter.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export async function markdownToHtml(markdown: string): Promise<string> {
  try {
    const result = await unified()
      .use(remarkParse)           // Parse Markdown
      .use(remarkRehype)          // Convert to HTML AST
      .use(rehypeHighlight)       // Add syntax highlighting
      .use(rehypeStringify)       // Convert to HTML string
      .process(markdown);
    
    return result.toString();
  } catch (error) {
    console.error('Markdown conversion error:', error);
    throw new Error('Failed to convert markdown to HTML');
  }
}

export function extractFrontmatter(content: string): {
  frontmatter: Record<string, any>;
  body: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const [, frontmatterStr, body] = match;
  const frontmatter: Record<string, any> = {};
  
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim();
    }
  });
  
  return { frontmatter, body };
}
```

### 5. Email Utilities
```tsx
// lib/email/send.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@dakiaacademy.com',
      to,
      subject,
      html,
    });
    console.log('Email sent successfully to:', to);
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}
```

### 6. Validation Utilities
```tsx
// lib/validation/index.ts
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML tags
    .substring(0, 500); // Limit length
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
}
```

## 📝 Best Practices

### 1. Error Handling
```tsx
// Always wrap in try-catch and provide meaningful errors
export async function utilityFunction(param: string) {
  try {
    const result = await someAsyncOperation(param);
    return result;
  } catch (error) {
    console.error('Error in utilityFunction:', error);
    throw new Error('Failed to perform operation');
  }
}
```

### 2. Type Safety
```tsx
// Use TypeScript for all utility functions
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function parseJSON<T>(json: string): T | null {
  try {
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}
```

### 3. Singleton Pattern for Resources
```tsx
// Use singleton for database connections, external clients
let client: ExternalClient | null = null;

export function getClient(): ExternalClient {
  if (!client) {
    client = new ExternalClient({
      apiKey: process.env.API_KEY,
    });
  }
  return client;
}
```

### 4. Configuration Management
```tsx
// lib/config/index.ts
export const config = {
  db: {
    uri: process.env.MONGODB_URI!,
    options: {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    },
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiresIn: '7d',
    bcryptRounds: 10,
  },
  email: {
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
};

// Validate config on startup
export function validateConfig() {
  const required = [
    'MONGODB_URI',
    'JWT_SECRET',
    'SMTP_HOST',
    'SMTP_USER',
    'SMTP_PASS',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
```

## 🔒 Security Guidelines

### 1. Never Expose Secrets
```tsx
// ❌ BAD
export const secret = 'my-secret-key';

// ✅ GOOD
const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET not configured');
```

### 2. Validate All Inputs
```tsx
export function processUserInput(input: string): string {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }
  
  // Sanitize
  const sanitized = sanitizeInput(input);
  
  // Validate
  if (sanitized.length === 0) {
    throw new Error('Input cannot be empty');
  }
  
  return sanitized;
}
```

### 3. Rate Limiting Helper
```tsx
// lib/rate-limit/index.ts
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export async function rateLimit(
  identifier: string,
  maxRequests: number,
  windowMs: number
): Promise<{ success: boolean; remaining: number }> {
  const now = Date.now();
  const record = requestCounts.get(identifier);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: maxRequests - 1 };
  }
  
  if (record.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }
  
  record.count++;
  return { success: true, remaining: maxRequests - record.count };
}
```

## ✅ Checklist for New Utilities

- [ ] Write in TypeScript with proper types
- [ ] Add comprehensive error handling
- [ ] Write unit tests for the utility
- [ ] Document function parameters and return values
- [ ] Export only necessary functions
- [ ] Use environment variables for configuration
- [ ] Follow naming conventions (camelCase for functions)
- [ ] Add JSDoc comments for complex functions
- [ ] Consider performance implications
- [ ] Validate inputs before processing

## 📚 Related Documentation

- [App Directory SKILL.md](../app/SKILL.md)
- [Models SKILL.md](../models/SKILL.md)
- [Types SKILL.md](../types/SKILL.md)
- [Coding Conventions](../docs/CODING_CONVENTIONS.md)

## 🎓 Key Takeaways

1. **Reusability** - Write utilities that can be used across the app
2. **Type Safety** - Use TypeScript for all utilities
3. **Error Handling** - Always handle errors gracefully
4. **Security** - Never expose secrets, validate inputs
5. **Singleton Pattern** - Use for database connections and clients
6. **Documentation** - Comment complex logic
7. **Testing** - Write unit tests for utilities
