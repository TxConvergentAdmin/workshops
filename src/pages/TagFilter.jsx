import { useState } from 'react';

export default function TagFilter({ tags, posts }) {
  const [selectedTag, setSelectedTag] = useState(tags[0]?.name || 'All');

  const filteredPosts =
    selectedTag === 'All'
      ? posts
      : posts.filter((post) => post.data.tags?.includes(selectedTag));

  return (
    <>
      <section className="mb-16">
        <ul className="flex flex-wrap gap-2 text-base text-slate10">
          {tags.map(({ name, count }) => (
            <li
              key={name}
              className={`block cursor-pointer rounded-full px-4 py-2 transition-all ${
                selectedTag === name
                  ? 'bg-slate5 text-slate12'
                  : 'bg-slate3 text-slate10 hover:bg-slate4 hover:text-slate11'
              }`}
              onClick={() => setSelectedTag(name)}
            >
              {name}
              <sup className="text-[10px] text-slate8">{count}</sup>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <div className="text-base text-slate12">
          {filteredPosts.map((item) => (
            <a
              key={item.id}
              className="flex cursor-pointer flex-col justify-between rounded-lg py-2.5 transition-all active:scale-[0.995] active:bg-slate4 sm:flex-row sm:items-center sm:px-2 sm:hover:bg-slate3"
              href={item.url}
              title={item.data.title}
            >
              <span className="shrink-0">{item.data.title}</span>
              <span className="mx-8 hidden h-px w-full grow border-t border-dashed border-slate6 sm:flex" />
              <span className="shrink-0 text-slate8">
                {item.data.pubDate?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
