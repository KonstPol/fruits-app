import { API_CONFIG } from "../config";
import { RequestOptions } from "../models/api";

export const fetchApi = async (endpoint: string, options?: RequestOptions): Promise<Response> => {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    const headers: HeadersInit = {
        ...(options?.headers || {}),
        "x-api-key": API_CONFIG.API_KEY,
        "Content-Type": "application/json",
    };
    const fetchOprions: RequestInit = {
        ...options,
        headers,
    };

    return fetch(url, fetchOprions);
};