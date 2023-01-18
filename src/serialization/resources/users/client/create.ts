/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.users.create.Request.Raw, CodeCombatApi.CreateUserRequest> =
    core.serialization.object({
        name: core.serialization.string(),
        email: core.serialization.string(),
        role: core.serialization.string().optional(),
        preferredLanguage: core.serialization.string().optional(),
        heroConfig: core.serialization.lazyObject(async () => (await import("../../..")).HeroConfig).optional(),
        birthday: core.serialization.string().optional(),
    });

export declare namespace Request {
    interface Raw {
        name: string;
        email: string;
        role?: string | null;
        preferredLanguage?: string | null;
        heroConfig?: serializers.HeroConfig.Raw | null;
        birthday?: string | null;
    }
}
