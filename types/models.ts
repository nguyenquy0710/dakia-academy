import { ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  department?: string;
  position?: string;
  createdAt: Date;
  updatedAt: Date;
  
  enrolledCourses: {
    courseId: ObjectId;
    progress: number;
    completedLessons: string[];
    lastAccessedAt: Date;
    completedAt?: Date;
  }[];
  
  certificates: {
    courseId: ObjectId;
    issuedAt: Date;
    certificateUrl: string;
  }[];
}

export interface ICourse {
  _id: ObjectId;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  author: string;
  thumbnail?: string;
  tags: string[];
  
  metaTitle?: string;
  metaDescription?: string;
  
  lessons: {
    id: string;
    title: string;
    order: number;
    contentId: ObjectId;
    duration?: number;
  }[];
  
  totalStudents: number;
  averageRating?: number;
  
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContent {
  _id: ObjectId;
  courseId: ObjectId;
  lessonId: string;
  
  markdownContent: string;
  htmlContent: string;
  
  createdAt: Date;
  updatedAt: Date;
}
