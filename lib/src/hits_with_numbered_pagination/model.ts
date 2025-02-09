import type { MultiSearchQuery, MultiSearchResult } from "meilisearch";

// type PaginationConnectorParams = {
//   /**
//    * The total number of pages to browse.
//    */
//   totalPages?: number;
//   /**
//    * The padding of pages to show around the current page
//    * @default 3
//    */
//   padding?: number;
// };
// export type PaginationRenderState = {
//   /** Creates URLs for the next state, the number is the page to generate the URL for. */
//   createURL: CreateURL<number>;
//   /** Sets the current page and triggers a search. */
//   refine: (page: number) => void;
//   /** true if this search returned more than one page */
//   canRefine: boolean;
//   /** The number of the page currently displayed. */
//   currentRefinement: number;
//   /** The number of hits computed for the last query (can be approximated). */
//   nbHits: number;
//   /** The number of pages for the result set. */
//   nbPages: number;
//   /** The actual pages relevant to the current situation and padding. */
//   pages: number[];
//   /** true if the current page is also the first page. */
//   isFirstPage: boolean;
//   /** true if the current page is also the last page. */
//   isLastPage: boolean;
// };

export type HitsPerPage = NonNullable<MultiSearchQuery["hitsPerPage"]>;
export type Page = NonNullable<MultiSearchQuery["page"]>;
// deno-lint-ignore no-explicit-any
export type Hits<T extends Record<string, any>> = MultiSearchResult<T>["hits"];
export type TotalHits = NonNullable<MultiSearchResult<never>["totalHits"]>;
export type TotalPages = NonNullable<MultiSearchResult<never>["totalPages"]>;

// deno-lint-ignore no-explicit-any
export type HitsWithNumberedPaginationOptions<T extends Record<string, any>> = {
  initialHitsPerPage: HitsPerPage;
  hitsPerPageListener: (hitsPerPage: HitsPerPage) => void;
  hitsListener: (hits: Hits<T>) => void;
  totalHitsListener: (totalHits: TotalHits) => void;
  totalPagesListener: (totalPages: TotalPages) => void;
  pageListener: (page: Page) => void;
};

export const PAGE_ONE = 1;
