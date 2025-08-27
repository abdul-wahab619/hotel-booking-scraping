import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchResults } from "../../../lib/fetchResults";

type Props = {
  searchParams: Promise<SearchParams>; // 👈 make this a Promise
};

export type SearchParams = {
  url?: string;
  group_adults?: string;
  group_children?: string;
  no_rooms?: string;
  checkin?: string;
  checkout?: string;
};

export default async function SearchPage({ searchParams }: Props) {
  // ✅ Await the searchParams proxy
  const params = await searchParams;

  if (!params.url) return notFound();

  const results = await fetchResults(params);
  console.log("scraped results:", results);

  if (!results) return <div>No results...</div>;

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

        <h2 className="pb-3">
          Dates of trip:
          <span className="italic ml-2">
            {params.checkin} to {params.checkout}
          </span>
        </h2>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">
          {results.content.total_listings}
        </h3>

        <div className="space-y-2 mt-5">
          {results?.content?.listings?.length ? (
            results.content.listings.map((item, i) => (
              <div
                key={i}
                className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
              >
                <img
                  src={item?.url || "/placeholder.jpg"} // fallback image
                  alt="image of property"
                  className="h-44 w-44 rounded-lg object-cover"
                />

                <div className="flex flex-1 space-x-5 justify-between">
                  <div>
                    {item?.link ? (
                      <Link
                        href={item.link}
                        className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                      >
                        {item?.title || "No Title"}
                      </Link>
                    ) : (
                      <span className="font-bold">
                        {item?.title || "No Title"}
                      </span>
                    )}
                    <p className="text-xs">
                      {item?.description || "No description available"}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex items-start justify-end space-x-2 text-right">
                      <div>
                        <p className="font-bold">
                          {item?.rating_word || "No rating"}
                        </p>
                        <p className="text-xs">
                          {item?.rating_count || "0 reviews"}
                        </p>
                      </div>

                      <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                        {item?.rating || "N/A"}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs">
                        {item?.booking_metadata || "No booking info"}
                      </p>
                      <p className="text-2xl font-bold">
                        {item?.price || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      </div>
    </section>
  );
}
