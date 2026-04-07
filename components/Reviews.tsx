"use client";

import { useState } from "react";
import { Star, User, MessageSquare } from "lucide-react";
import { Review } from "@/lib/db";
import { createReviewAction } from "@/app/actions/reviews";

export function Reviews({ productId, reviews = [] }: { productId: string, reviews?: Review[] }) {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <div className="mt-24 pt-16 border-t border-card-border">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Review Stats & Form */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
            <MessageSquare className="text-accent" /> Product Reviews
          </h2>
          
          <div className="flex items-end gap-4 mb-8">
            <div className="text-6xl font-black">{averageRating}</div>
            <div className="pb-1">
              <div className="flex text-accent mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill={i <= Math.round(Number(averageRating)) ? "currentColor" : "none"} className={i > Math.round(Number(averageRating)) ? "text-card-border" : ""} />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Based on {reviews.length} reviews</p>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-3xl p-6">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-card-border pb-4">Write a Review</h3>
            <form action={createReviewAction.bind(null, productId)} className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-2">Rating</label>
                <div className="flex gap-1" onMouseLeave={() => setHoveredRating(0)}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseEnter={() => setHoveredRating(i)}
                      onClick={() => setRating(i)}
                      className="text-accent transition-transform hover:scale-110"
                    >
                      <Star size={24} fill={i <= (hoveredRating || rating) ? "currentColor" : "none"} className={i > (hoveredRating || rating) ? "text-card-border" : ""} />
                    </button>
                  ))}
                </div>
                <input type="hidden" name="rating" value={rating} />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Name</label>
                <input required type="text" name="author" placeholder="Hypebeast..." className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Your Review</label>
                <textarea required name="content" rows={4} placeholder="What did you think of the fit?" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"></textarea>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all">
                Post Review
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:w-2/3 space-y-6">
          {reviews.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center bg-card border border-card-border rounded-3xl p-12 text-center">
              <Star size={48} className="text-gray-500 mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">No reviews yet</h3>
              <p className="text-gray-400">Be the first to share your thoughts on this drop.</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-background border border-card-border rounded-3xl p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-bold">{review.author}</p>
                      <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill={i <= review.rating ? "currentColor" : "none"} className={i > review.rating ? "text-card-border" : ""} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">"{review.content}"</p>
              </div>
            )).reverse() 
          )}
        </div>

      </div>
    </div>
  );
}
