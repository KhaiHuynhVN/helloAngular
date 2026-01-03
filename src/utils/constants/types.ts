// ===== API Response Types =====
export interface ApiResponse<T> {
   data: T;
   message: string;
   success: boolean;
   statusCode: number;
}

export interface PaginatedResponse<T> {
   data: T[];
   meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
   };
}

export interface ApiError {
   message: string;
   statusCode: number;
   errors?: Record<string, string[]>;
}

// ===== Request Types =====
export interface PaginationParams {
   page?: number;
   limit?: number;
   sortBy?: string;
   sortOrder?: "asc" | "desc";
}

export interface SearchParams extends PaginationParams {
   keyword?: string;
   filters?: Record<string, unknown>;
}
