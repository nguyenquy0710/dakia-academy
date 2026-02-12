# Models Directory - SKILL.md

## 📋 Overview

The `models/` directory contains MongoDB schema definitions using Mongoose ODM. These models define the structure, validation, and behavior of data in the database.

## 🎯 Purpose

- **Data Schema**: Define structure of documents in MongoDB
- **Validation**: Ensure data integrity with built-in validators
- **Relationships**: Define references between collections
- **Business Logic**: Add methods and virtuals to models
- **Indexing**: Optimize queries with proper indexes

## 📁 Structure

```
models/
├── User.ts       # User model (authentication, profile, enrollments)
├── Course.ts     # Course model (title, lessons, metadata)
└── Content.ts    # Content model (Markdown and HTML content)
```

## 🔧 Technical Skills Required

### 1. Mongoose Schema Definition
```tsx
// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'super-admin';
  department?: string;
  position?: string;
  enrolledCourses: {
    courseId: mongoose.Types.ObjectId;
    progress: number;
    completedLessons: string[];
    lastAccessedAt: Date;
    completedAt?: Date;
  }[];
  certificates: {
    courseId: mongoose.Types.ObjectId;
    issuedAt: Date;
    certificateUrl: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false, // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'super-admin'],
      default: 'user',
    },
    department: {
      type: String,
      trim: true,
    },
    position: {
      type: String,
      trim: true,
    },
    enrolledCourses: [
      {
        courseId: {
          type: Schema.Types.ObjectId,
          ref: 'Course',
          required: true,
        },
        progress: {
          type: Number,
          default: 0,
          min: 0,
          max: 100,
        },
        completedLessons: [String],
        lastAccessedAt: {
          type: Date,
          default: Date.now,
        },
        completedAt: Date,
      },
    ],
    certificates: [
      {
        courseId: {
          type: Schema.Types.ObjectId,
          ref: 'Course',
          required: true,
        },
        issuedAt: {
          type: Date,
          default: Date.now,
        },
        certificateUrl: String,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Indexes
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ 'enrolledCourses.courseId': 1 });

// Instance methods
UserSchema.methods.enrollCourse = function(courseId: mongoose.Types.ObjectId) {
  const alreadyEnrolled = this.enrolledCourses.some(
    (ec: any) => ec.courseId.toString() === courseId.toString()
  );
  
  if (!alreadyEnrolled) {
    this.enrolledCourses.push({
      courseId,
      progress: 0,
      completedLessons: [],
      lastAccessedAt: new Date(),
    });
  }
};

// Export model
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
```

### 2. Course Model
```tsx
// models/Course.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  author: string;
  thumbnail?: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  lessons: {
    id: string;
    title: string;
    order: number;
    contentId: mongoose.Types.ObjectId;
    duration?: number;
  }[];
  totalStudents: number;
  averageRating?: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: String,
    tags: [String],
    metaTitle: String,
    metaDescription: String,
    lessons: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        order: {
          type: Number,
          required: true,
        },
        contentId: {
          type: Schema.Types.ObjectId,
          ref: 'Content',
        },
        duration: Number,
      },
    ],
    totalStudents: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
CourseSchema.index({ slug: 1 });
CourseSchema.index({ category: 1 });
CourseSchema.index({ level: 1 });
CourseSchema.index({ isPublished: 1 });
CourseSchema.index({ title: 'text', description: 'text' }); // Text search

// Virtual for lesson count
CourseSchema.virtual('lessonCount').get(function() {
  return this.lessons.length;
});

// Pre-save middleware to generate slug
CourseSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
  }
  next();
});

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);
```

### 3. Content Model
```tsx
// models/Content.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IContent extends Document {
  _id: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  lessonId: string;
  markdownContent: string;
  htmlContent: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContentSchema = new Schema<IContent>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    lessonId: {
      type: String,
      required: true,
    },
    markdownContent: {
      type: String,
      required: true,
    },
    htmlContent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for efficient queries
ContentSchema.index({ courseId: 1, lessonId: 1 }, { unique: true });

export default mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);
```

## 📝 Best Practices

### 1. Schema Validation
```tsx
// Use built-in validators
{
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
  },
  age: {
    type: Number,
    min: [18, 'Must be at least 18 years old'],
    max: [100, 'Age cannot exceed 100'],
  },
  status: {
    type: String,
    enum: {
      values: ['active', 'inactive', 'pending'],
      message: '{VALUE} is not a valid status',
    },
  },
}
```

### 2. Custom Validators
```tsx
const UserSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: function(v: string) {
        return /^[a-zA-Z0-9_]{3,20}$/.test(v);
      },
      message: 'Username must be 3-20 characters and contain only letters, numbers, and underscores',
    },
  },
});
```

### 3. Indexes for Performance
```tsx
// Single field index
UserSchema.index({ email: 1 });

// Compound index
UserSchema.index({ category: 1, level: 1 });

// Text index for search
CourseSchema.index({ title: 'text', description: 'text' });

// Unique compound index
ContentSchema.index({ courseId: 1, lessonId: 1 }, { unique: true });
```

### 4. Middleware (Hooks)
```tsx
// Pre-save hook
UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    // Hash password before saving
    this.password = await hashPassword(this.password);
  }
  next();
});

// Post-save hook
CourseSchema.post('save', function(doc) {
  console.log('Course saved:', doc.title);
});

// Pre-remove hook
UserSchema.pre('remove', async function(next) {
  // Clean up related data
  await Enrollment.deleteMany({ userId: this._id });
  next();
});
```

### 5. Instance Methods
```tsx
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.getPublicProfile = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
  };
};
```

### 6. Static Methods
```tsx
UserSchema.statics.findByEmail = function(email: string) {
  return this.findOne({ email: email.toLowerCase() });
};

CourseSchema.statics.findPublished = function() {
  return this.find({ isPublished: true }).sort({ createdAt: -1 });
};
```

### 7. Virtuals
```tsx
UserSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

CourseSchema.virtual('durationMinutes').get(function() {
  return this.lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0);
});
```

## 🔒 Security Best Practices

### 1. Password Handling
```tsx
// NEVER select password by default
password: {
  type: String,
  required: true,
  select: false, // Exclude from queries
}

// To include password when needed
const user = await User.findOne({ email }).select('+password');
```

### 2. Sensitive Data
```tsx
// Hide sensitive fields using toJSON
UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});
```

### 3. Input Sanitization
```tsx
// Trim and lowercase before saving
email: {
  type: String,
  required: true,
  lowercase: true,
  trim: true,
}
```

## ✅ Checklist for New Models

- [ ] Define TypeScript interface extending Document
- [ ] Create Mongoose schema with proper types
- [ ] Add required field validators
- [ ] Add custom validators where needed
- [ ] Create appropriate indexes
- [ ] Add middleware (pre/post hooks) if needed
- [ ] Define instance methods
- [ ] Define static methods
- [ ] Add virtuals for computed properties
- [ ] Configure toJSON transformation
- [ ] Export model with Next.js compatibility check
- [ ] Document the model purpose and fields

## 📚 Related Documentation

- [Lib SKILL.md](../lib/SKILL.md)
- [Types SKILL.md](../types/SKILL.md)
- [API Routes SKILL.md](../app/api/SKILL.md)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)

## 🎓 Key Takeaways

1. **Schema Definition** - Define clear structure with types
2. **Validation** - Use built-in and custom validators
3. **Indexes** - Optimize queries with proper indexing
4. **Middleware** - Use hooks for data processing
5. **Methods** - Add business logic to models
6. **Security** - Never expose sensitive data
7. **TypeScript** - Use interfaces for type safety
