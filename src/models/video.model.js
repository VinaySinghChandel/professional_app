import mongoose, { Schema } from "mongoose";
import mongooseAggregatePagnate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,//cloudnary url
            required:true,
        },
        thumbnail:{
            type:String,//cloudnary url
            required:true,
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        duration:{
            type:Number, //cloudnary url
            required:true,
        },
        views:{
            type:Number,
            default:0,
        },
        isPublished:{
            type:Boolean,
            default:true,
        },
        createdAt:{
            timestamps:true,
        },
        updatedAt:{
            timestamps:true,
        }
    },
    {
        timestamps:true,
    }
);

videoSchema.plugin(mongooseAggregatePagnate);

export const Video = mongoose.model('Video', videoSchema);