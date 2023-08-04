"use client";

function Posts({ posts }: any) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-10">
        {posts?.map((i: any) => (
          <div key={i.id} className="card w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{i.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{i.views}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
