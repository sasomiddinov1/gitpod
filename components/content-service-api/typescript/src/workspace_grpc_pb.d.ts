/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

// package: contentservice
// file: workspace.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as workspace_pb from "./workspace_pb";

interface IWorkspaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    workspaceDownloadURL: IWorkspaceServiceService_IWorkspaceDownloadURL;
    deleteWorkspace: IWorkspaceServiceService_IDeleteWorkspace;
    workspaceObjectExists: IWorkspaceServiceService_IWorkspaceObjectExists;
}

interface IWorkspaceServiceService_IWorkspaceDownloadURL extends grpc.MethodDefinition<workspace_pb.WorkspaceDownloadURLRequest, workspace_pb.WorkspaceDownloadURLResponse> {
    path: "/contentservice.WorkspaceService/WorkspaceDownloadURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workspace_pb.WorkspaceDownloadURLRequest>;
    requestDeserialize: grpc.deserialize<workspace_pb.WorkspaceDownloadURLRequest>;
    responseSerialize: grpc.serialize<workspace_pb.WorkspaceDownloadURLResponse>;
    responseDeserialize: grpc.deserialize<workspace_pb.WorkspaceDownloadURLResponse>;
}
interface IWorkspaceServiceService_IDeleteWorkspace extends grpc.MethodDefinition<workspace_pb.DeleteWorkspaceRequest, workspace_pb.DeleteWorkspaceResponse> {
    path: "/contentservice.WorkspaceService/DeleteWorkspace";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workspace_pb.DeleteWorkspaceRequest>;
    requestDeserialize: grpc.deserialize<workspace_pb.DeleteWorkspaceRequest>;
    responseSerialize: grpc.serialize<workspace_pb.DeleteWorkspaceResponse>;
    responseDeserialize: grpc.deserialize<workspace_pb.DeleteWorkspaceResponse>;
}
interface IWorkspaceServiceService_IWorkspaceObjectExists extends grpc.MethodDefinition<workspace_pb.WorkspaceObjectExistsRequest, workspace_pb.WorkspaceObjectExistsResponse> {
    path: "/contentservice.WorkspaceService/WorkspaceObjectExists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workspace_pb.WorkspaceObjectExistsRequest>;
    requestDeserialize: grpc.deserialize<workspace_pb.WorkspaceObjectExistsRequest>;
    responseSerialize: grpc.serialize<workspace_pb.WorkspaceObjectExistsResponse>;
    responseDeserialize: grpc.deserialize<workspace_pb.WorkspaceObjectExistsResponse>;
}

export const WorkspaceServiceService: IWorkspaceServiceService;

export interface IWorkspaceServiceServer extends grpc.UntypedServiceImplementation {
    workspaceDownloadURL: grpc.handleUnaryCall<workspace_pb.WorkspaceDownloadURLRequest, workspace_pb.WorkspaceDownloadURLResponse>;
    deleteWorkspace: grpc.handleUnaryCall<workspace_pb.DeleteWorkspaceRequest, workspace_pb.DeleteWorkspaceResponse>;
    workspaceObjectExists: grpc.handleUnaryCall<workspace_pb.WorkspaceObjectExistsRequest, workspace_pb.WorkspaceObjectExistsResponse>;
}

export interface IWorkspaceServiceClient {
    workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
    workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
    workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
}

export class WorkspaceServiceClient extends grpc.Client implements IWorkspaceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public workspaceDownloadURL(request: workspace_pb.WorkspaceDownloadURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkspace(request: workspace_pb.DeleteWorkspaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.DeleteWorkspaceResponse) => void): grpc.ClientUnaryCall;
    public workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
    public workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
    public workspaceObjectExists(request: workspace_pb.WorkspaceObjectExistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workspace_pb.WorkspaceObjectExistsResponse) => void): grpc.ClientUnaryCall;
}
