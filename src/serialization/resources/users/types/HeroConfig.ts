/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const HeroConfig: core.serialization.ObjectSchema<serializers.HeroConfig.Raw, CodeCombatApi.HeroConfig> =
    core.serialization.object({
        thangType: core.serialization.lazy(async () => (await import("../../..")).ObjectId).optional(),
    });

export declare namespace HeroConfig {
    interface Raw {
        thangType?: serializers.ObjectId.Raw | null;
    }
}
