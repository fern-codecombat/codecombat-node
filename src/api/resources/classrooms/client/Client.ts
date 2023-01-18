/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CodecombatApi } from "@fern-api/codecombat";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CodecombatApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns the classroom details for a class code.
     */
    public async get(request: CodecombatApi.GetClassroomRequest): Promise<CodecombatApi.ClassroomResponseWithCode> {
        const _queryParams = new URLSearchParams();
        _queryParams.append("code", request.code);
        if (request.retMemberLimit != null) {
            _queryParams.append("retMemberLimit", request.retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CodecombatApiEnvironment.Production, "/classrooms"),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.classrooms.get.Response.parse(
                _response.body as serializers.classrooms.get.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a new empty `Classroom`.
     */
    public async create(request: CodecombatApi.CreateClassroomRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CodecombatApiEnvironment.Production, "/classrooms"),
            method: "POST",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.classrooms.create.Request.json({
                name: request.name,
                ownerId: request.ownerId,
                aceConfig: request.aceConfig,
            }),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Upserts a user into the classroom.
     */
    public async upsert(
        handle: string,
        request: CodecombatApi.UpsertClassroomRequest
    ): Promise<CodecombatApi.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${handle}/members`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.classrooms.upsert.Request.json({
                code: request.code,
                userId: request.userId,
                retMemberLimit: request.retMemberLimit,
            }),
        });
        if (_response.ok) {
            return await serializers.classrooms.upsert.Response.parse(
                _response.body as serializers.classrooms.upsert.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Remove a user from the classroom.
     */
    public async removeUser(
        handle: string,
        request: CodecombatApi.RemoveUserRequest
    ): Promise<CodecombatApi.ClassroomResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${handle}/members`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.classrooms.removeUser.Request.json({
                userId: request.userId,
                retMemberLimit: request.retMemberLimit,
            }),
        });
        if (_response.ok) {
            return await serializers.classrooms.removeUser.Response.parse(
                _response.body as serializers.classrooms.removeUser.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Enrolls a user in a course in a classroom.
     * If the course is paid, user must have an active license.
     * User must be a member of the classroom.
     *
     */
    public async enrollUser(
        classroomHandle: string,
        courseHandle: string,
        request: CodecombatApi.EnrollUserRequest
    ): Promise<CodecombatApi.ClassroomResponse> {
        const _queryParams = new URLSearchParams();
        if (request.retMemberLimit != null) {
            _queryParams.append("retMemberLimit", request.retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${classroomHandle}/courses/${courseHandle}/enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
            body: await serializers.classrooms.enrollUser.Request.json({
                userId: request.userId,
            }),
        });
        if (_response.ok) {
            return await serializers.classrooms.enrollUser.Response.parse(
                _response.body as serializers.classrooms.enrollUser.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Removes an enrolled user from a course in a classroom.
     *
     */
    public async unenrollUser(
        classroomHandle: string,
        courseHandle: string,
        request: CodecombatApi.UnenrollUserRequest
    ): Promise<CodecombatApi.ClassroomResponse> {
        const _queryParams = new URLSearchParams();
        if (request.retMemberLimit != null) {
            _queryParams.append("retMemberLimit", request.retMemberLimit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${classroomHandle}/courses/${courseHandle}/remove-enrolled`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
            body: await serializers.classrooms.unenrollUser.Request.json({
                userId: request.userId,
            }),
        });
        if (_response.ok) {
            return await serializers.classrooms.unenrollUser.Response.parse(
                _response.body as serializers.classrooms.unenrollUser.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of all members stats for the classroom.
     *
     */
    public async getStats(
        classroomHandle: string,
        request?: CodecombatApi.ClassroomStatsRequest
    ): Promise<CodecombatApi.ClassroomStats[]> {
        const _queryParams = new URLSearchParams();
        if (request?.project != null) {
            _queryParams.append("project", request?.project);
        }

        if (request?.memberLimit != null) {
            _queryParams.append("memberLimit", request?.memberLimit.toString());
        }

        if (request?.memberSkip != null) {
            _queryParams.append("memberSkip", request?.memberSkip.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${classroomHandle}/stats`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.classrooms.getStats.Response.parse(
                _response.body as serializers.classrooms.getStats.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of all levels played by the user for the classroom.
     *
     */
    public async getLevelsPlayedForUser(
        classroomHandle: string,
        memberHandle: string
    ): Promise<CodecombatApi.LevelSessionResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/classrooms/${classroomHandle}/members/${memberHandle}/sessions`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.classrooms.getLevelsPlayedForUser.Response.parse(
                _response.body as serializers.classrooms.getLevelsPlayedForUser.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
