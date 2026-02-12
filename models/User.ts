import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/types/models';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
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
    timestamps: true,
  }
);

// Create indexes
UserSchema.index({ email: 1 });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
