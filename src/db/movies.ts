import mongoose, { Schema, Document } from 'mongoose';

interface IReview {
  username: string;
  text: string;
}

export interface IMovie extends Document {
  _id: string;
  title: string;
  genre: string[];
  language?: string[];
  duration?: string;
  releaseYear?: number;
  director?: string;
  cast?: string[];
  description?: string;
  posterUrl?: string;
  trailerUrl?: string;
  streamingLink: string;
  ratings: number;
  reviews: IReview[];
  createdBy?: string;
  _created_at: Date;
  _updated_at: Date;
}

const MovieSchema = new Schema<IMovie>(
  {
    _id: String,
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    language: {
      type: [String],
    },
    duration: {
      type: String,
    },
    releaseYear: {
      type: Number,
    },
    director: {
      type: String,
    },
    cast: {
      type: [String],
    },
    description: {
      type: String,
    },
    posterUrl: {
      type: String,
    },
    trailerUrl: {
      type: String,
    },
    streamingLink: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    reviews: [
      {
        username: String,
        text: String,
      },
    ],
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: '_created_at',
      updatedAt: '_updated_at',
    },
    versionKey: false,
  }
);

const Movies = mongoose.model<IMovie>('Movies', MovieSchema, 'Movies');
export default Movies;
