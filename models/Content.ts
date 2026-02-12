import mongoose, { Schema, Model } from 'mongoose';
import { IContent } from '@/types/models';

const ContentSchema = new Schema<IContent>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course ID is required'],
    },
    lessonId: {
      type: String,
      required: [true, 'Lesson ID is required'],
    },
    markdownContent: {
      type: String,
      required: [true, 'Markdown content is required'],
    },
    htmlContent: {
      type: String,
      required: [true, 'HTML content is required'],
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
ContentSchema.index({ courseId: 1, lessonId: 1 });

const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
