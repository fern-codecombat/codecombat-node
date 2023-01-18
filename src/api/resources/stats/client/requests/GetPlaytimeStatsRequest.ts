/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetPlaytimeStatsRequest {
    /**
     * Earliest an included user was created
     */
    startDate?: string;
    /**
     * Latest an included user was created
     */
    endDate?: string;
    /**
     * Filter by country string
     */
    country?: string;
}
