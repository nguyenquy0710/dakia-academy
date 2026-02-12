# Content Directory - SKILL.md

## 📋 Overview

The `content/` directory contains all course content in Markdown format. This is where educational materials, lessons, and course structures are stored as static Markdown files.

## 🎯 Purpose

- **Course Content**: Store lesson content in Markdown
- **Version Control**: Track content changes with Git
- **Easy Editing**: Simple Markdown format for content creators
- **Static Generation**: Content can be pre-rendered for performance
- **Separation of Concerns**: Content separate from code

## 📁 Structure

```
content/
└── courses/
    └── ai-for-sales/
        ├── module-1.md
        ├── module-2.md
        └── module-3.md
```

## 🔧 Technical Skills Required

### 1. Markdown Basics
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Bullet list item 1
- Bullet list item 2

1. Numbered list item 1
2. Numbered list item 2

[Link text](https://example.com)
![Image alt text](image.jpg)

`inline code`

```javascript
// Code block
function example() {
  console.log('Hello');
}
```

> Blockquote text
```

### 2. Frontmatter for Metadata
```markdown
---
title: Module 1 - Introduction to AI for Sales
description: Learn the basics of AI and how it applies to sales
author: DAKIA Academy
duration: 45
order: 1
level: Beginner
---

# Module 1: Introduction to AI for Sales

Content starts here...
```

### 3. Extended Markdown Features
```markdown
<!-- Tables -->
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |

<!-- Task lists -->
- [x] Completed task
- [ ] Incomplete task

<!-- Emoji -->
:smile: :rocket: :heart:

<!-- Footnotes -->
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

<!-- Highlighted text -->
==Highlighted text==

<!-- Subscript and Superscript -->
H~2~O
X^2^
```

### 4. Course Content Structure
```markdown
---
title: AI cho Sales - Module 1
description: Giới thiệu về AI trong Sales
author: DAKIA Academy
duration: 60
order: 1
tags: [AI, Sales, Introduction]
---

# Module 1: Giới thiệu AI trong Sales

## Mục tiêu học tập

Sau khi hoàn thành module này, bạn sẽ:
- ✅ Hiểu được AI là gì và cách hoạt động
- ✅ Nhận biết các ứng dụng AI trong Sales
- ✅ Biết cách áp dụng AI vào quy trình bán hàng

## 1. AI là gì?

Trí tuệ nhân tạo (AI - Artificial Intelligence) là...

### 1.1. Định nghĩa

AI là khả năng của máy tính...

### 1.2. Các loại AI

- **AI hẹp (Narrow AI)**: Chuyên về một tác vụ cụ thể
- **AI tổng quát (General AI)**: Có khả năng tư duy như con người

## 2. AI trong Sales

### 2.1. Ứng dụng chính

1. **Lead Scoring**: Đánh giá khách hàng tiềm năng
2. **Chatbot**: Hỗ trợ khách hàng 24/7
3. **Dự đoán xu hướng**: Phân tích dữ liệu bán hàng

### 2.2. Lợi ích

| Lợi ích | Mô tả |
|---------|-------|
| Tiết kiệm thời gian | Tự động hóa công việc lặp lại |
| Tăng độ chính xác | Phân tích dữ liệu khách quan |
| Cải thiện trải nghiệm | Phản hồi nhanh chóng |

## 3. Ví dụ thực tế

```python
# Ví dụ: Lead Scoring đơn giản
def score_lead(lead):
    score = 0
    if lead['budget'] > 10000:
        score += 50
    if lead['decision_maker']:
        score += 30
    if lead['timeline'] == 'immediate':
        score += 20
    return score
```

## Bài tập

1. Liệt kê 3 ứng dụng AI trong công việc sales của bạn
2. So sánh ưu điểm và nhược điểm của việc sử dụng AI
3. Nghiên cứu một công cụ AI cho sales

## Tài liệu tham khảo

- [AI in Sales - Harvard Business Review](https://example.com)
- [Sales Automation Tools](https://example.com)

## Tóm tắt

Trong module này, chúng ta đã học về:
- Định nghĩa và các loại AI
- Ứng dụng AI trong Sales
- Lợi ích của AI
- Ví dụ thực tế

---

**Tiếp theo**: Module 2 - Lead Generation với AI
```

## 📝 Best Practices

### 1. File Naming Convention
```
✅ GOOD:
- module-1-introduction.md
- module-2-lead-generation.md
- 01-introduction.md
- 02-lead-generation.md

❌ BAD:
- Module 1.md (spaces in filename)
- intro.md (not descriptive)
- bài học 1.md (Vietnamese in filename)
```

### 2. Folder Structure
```
content/
└── courses/
    ├── ai-for-sales/
    │   ├── README.md           # Course overview
    │   ├── 01-introduction.md
    │   ├── 02-lead-generation.md
    │   └── 03-automation.md
    └── ai-for-marketing/
        ├── README.md
        ├── 01-basics.md
        └── 02-content-creation.md
```

### 3. Frontmatter Standards
```markdown
---
# Required fields
title: Module Title
description: Brief description
order: 1

# Optional fields
author: Author Name
duration: 60 # in minutes
level: Beginner | Intermediate | Advanced
tags: [AI, Sales, Marketing]
prerequisites: [Module 0]
learningOutcomes:
  - Outcome 1
  - Outcome 2
datePublished: 2024-01-01
dateUpdated: 2024-01-15
---
```

### 4. Content Organization
```markdown
# Main Title (H1) - Only one per file

## Section 1 (H2)
Content...

### Subsection 1.1 (H3)
Content...

### Subsection 1.2 (H3)
Content...

## Section 2 (H2)
Content...

## Summary
Wrap up the content

## Exercises
Practice questions

## Resources
Additional reading
```

### 5. Vietnamese Content Guidelines
```markdown
✅ GOOD:
- Use Vietnamese for all lesson content
- Clear, professional Vietnamese
- Avoid slang or informal language
- Use proper Vietnamese punctuation

❌ BAD:
- Mixing Vietnamese and English randomly
- Using chat language (ko, dc, vs...)
- Incorrect grammar or spelling
```

### 6. Code Examples
```markdown
<!-- Always specify language for syntax highlighting -->

✅ GOOD:
```python
def example():
    return "Hello"
```

```javascript
function example() {
  return "Hello";
}
```

❌ BAD:
```
function example() {
  return "Hello";
}
```
```

### 7. Images and Media
```markdown
<!-- Use descriptive alt text -->
![Diagram showing AI workflow](./images/ai-workflow.png)

<!-- Store images in course folder -->
content/
└── courses/
    └── ai-for-sales/
        ├── images/
        │   ├── ai-workflow.png
        │   └── lead-scoring.jpg
        └── module-1.md

<!-- Reference images relatively -->
![AI Workflow](./images/ai-workflow.png)
```

## 🔧 Content Processing

### Reading Markdown Files
```tsx
// lib/content/reader.ts
import fs from 'fs/promises';
import path from 'path';

export async function readMarkdownFile(
  courseslug: string,
  filename: string
): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    'content',
    'courses',
    courseSlug,
    filename
  );
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading file:', error);
    throw new Error(`Failed to read ${filename}`);
  }
}
```

### Extracting Frontmatter
```tsx
import matter from 'gray-matter';

export function parseMarkdown(content: string) {
  const { data: frontmatter, content: body } = matter(content);
  
  return {
    frontmatter,
    body,
  };
}
```

### Converting to HTML
```tsx
import { markdownToHtml } from '@/lib/markdown/converter';

export async function processLesson(
  courseSlug: string,
  filename: string
) {
  const markdown = await readMarkdownFile(courseSlug, filename);
  const { frontmatter, body } = parseMarkdown(markdown);
  const html = await markdownToHtml(body);
  
  return {
    frontmatter,
    html,
  };
}
```

## ✅ Checklist for New Content

- [ ] Create content in appropriate course folder
- [ ] Use kebab-case for filename
- [ ] Add frontmatter with required fields
- [ ] Use Vietnamese for content
- [ ] Structure with proper headings (H1, H2, H3)
- [ ] Add code examples with language specification
- [ ] Include images with alt text
- [ ] Add exercises or practice questions
- [ ] Include resources and references
- [ ] Proofread for grammar and spelling
- [ ] Test markdown rendering

## 📚 Related Documentation

- [Lib SKILL.md](../lib/SKILL.md) (for Markdown processing)
- [Models SKILL.md](../models/SKILL.md) (Content model)
- [Markdown Guide](https://www.markdownguide.org/)

## 🎓 Key Takeaways

1. **Markdown Format** - All content in Markdown for easy editing
2. **Frontmatter** - Metadata in YAML format at top of file
3. **Vietnamese Content** - All lessons in professional Vietnamese
4. **Organization** - Logical folder and file structure
5. **Code Examples** - Always specify language for highlighting
6. **Images** - Store in course folder, use descriptive alt text
7. **Version Control** - Track content changes with Git
