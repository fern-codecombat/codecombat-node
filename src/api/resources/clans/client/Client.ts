/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CodeCombatApi } from "@fern-api/codecombat";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CodeCombatApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Upserts a user into the clan.
     */
    public async put(handle: string, request: CodeCombatApi.ClanRequest): Promise<CodeCombatApi.ClanResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodeCombatApiEnvironment.Production,
                `/clan/${handle}/members`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.ClanRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.ClanResponse.parse(_response.body as serializers.ClanResponse.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatApiTimeoutError();
            case "unknown":
                throw new errors.CodeCombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
