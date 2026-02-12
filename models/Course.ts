import mongoose, { Schema, Model } from 'mongoose';
import { ICourse } from '@/types/models';

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
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

// Create indexes
CourseSchema.index({ slug: 1 });
CourseSchema.index({ category: 1 });
CourseSchema.index({ isPublished: 1 });

const Course: Model<ICourse> = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);

export default Course;
