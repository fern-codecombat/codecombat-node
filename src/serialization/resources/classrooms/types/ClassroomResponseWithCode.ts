/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const ClassroomResponseWithCode: core.serialization.ObjectSchema<
    serializers.ClassroomResponseWithCode.Raw,
    CodeCombatApi.ClassroomResponseWithCode
> = core.serialization.object({
    id: core.serialization.property(
        "_id",
        core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
    ),
    name: core.serialization.string().optional(),
    members: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ObjectId))
        .optional(),
    ownerId: core.serialization.property(
        "ownerID",
        core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional()
    ),
    description: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    codeCamel: core.serialization.string().optional(),
    courses: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Course))
        .optional(),
    clanId: core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional(),
});

export declare namespace ClassroomResponseWithCode {
    interface Raw {
        _id?: serializers.ObjectId.Raw | null;
        name?: string | null;
        members?: serializers.ObjectId.Raw[] | null;
        ownerID?: serializers.ObjectId.Raw | null;
        description?: string | null;
        code?: string | null;
        codeCamel?: string | null;
        courses?: serializers.Course.Raw[] | null;
        clanId?: serializers.ObjectId.Raw | null;
    }
}
