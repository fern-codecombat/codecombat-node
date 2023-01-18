/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const ClassroomStats: core.serialization.ObjectSchema<
    serializers.ClassroomStats.Raw,
    CodeCombatApi.ClassroomStats
> = core.serialization.object({
    id: core.serialization.property(
        "_id",
        core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
    ),
    stats: core.serialization.lazyObject(async () => (await import("../../..")).ClassroomStatsInfo).optional(),
});

export declare namespace ClassroomStats {
    interface Raw {
        _id?: serializers.ObjectId.Raw | null;
        stats?: serializers.ClassroomStatsInfo.Raw | null;
    }
}
