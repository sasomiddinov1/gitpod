// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var workspace_pb = require('./workspace_pb.js');

function serialize_contentservice_DeleteWorkspaceRequest(arg) {
  if (!(arg instanceof workspace_pb.DeleteWorkspaceRequest)) {
    throw new Error('Expected argument of type contentservice.DeleteWorkspaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DeleteWorkspaceRequest(buffer_arg) {
  return workspace_pb.DeleteWorkspaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_DeleteWorkspaceResponse(arg) {
  if (!(arg instanceof workspace_pb.DeleteWorkspaceResponse)) {
    throw new Error('Expected argument of type contentservice.DeleteWorkspaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_DeleteWorkspaceResponse(buffer_arg) {
  return workspace_pb.DeleteWorkspaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_WorkspaceDownloadURLRequest(arg) {
  if (!(arg instanceof workspace_pb.WorkspaceDownloadURLRequest)) {
    throw new Error('Expected argument of type contentservice.WorkspaceDownloadURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_WorkspaceDownloadURLRequest(buffer_arg) {
  return workspace_pb.WorkspaceDownloadURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_WorkspaceDownloadURLResponse(arg) {
  if (!(arg instanceof workspace_pb.WorkspaceDownloadURLResponse)) {
    throw new Error('Expected argument of type contentservice.WorkspaceDownloadURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_WorkspaceDownloadURLResponse(buffer_arg) {
  return workspace_pb.WorkspaceDownloadURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_WorkspaceObjectExistsRequest(arg) {
  if (!(arg instanceof workspace_pb.WorkspaceObjectExistsRequest)) {
    throw new Error('Expected argument of type contentservice.WorkspaceObjectExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_WorkspaceObjectExistsRequest(buffer_arg) {
  return workspace_pb.WorkspaceObjectExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_WorkspaceObjectExistsResponse(arg) {
  if (!(arg instanceof workspace_pb.WorkspaceObjectExistsResponse)) {
    throw new Error('Expected argument of type contentservice.WorkspaceObjectExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_WorkspaceObjectExistsResponse(buffer_arg) {
  return workspace_pb.WorkspaceObjectExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkspaceServiceService = exports.WorkspaceServiceService = {
  // WorkspaceDownloadURL provides a URL from where the content of a workspace can be downloaded from
workspaceDownloadURL: {
    path: '/contentservice.WorkspaceService/WorkspaceDownloadURL',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.WorkspaceDownloadURLRequest,
    responseType: workspace_pb.WorkspaceDownloadURLResponse,
    requestSerialize: serialize_contentservice_WorkspaceDownloadURLRequest,
    requestDeserialize: deserialize_contentservice_WorkspaceDownloadURLRequest,
    responseSerialize: serialize_contentservice_WorkspaceDownloadURLResponse,
    responseDeserialize: deserialize_contentservice_WorkspaceDownloadURLResponse,
  },
  // DeleteWorkspace deletes the content of a single workspace
deleteWorkspace: {
    path: '/contentservice.WorkspaceService/DeleteWorkspace',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.DeleteWorkspaceRequest,
    responseType: workspace_pb.DeleteWorkspaceResponse,
    requestSerialize: serialize_contentservice_DeleteWorkspaceRequest,
    requestDeserialize: deserialize_contentservice_DeleteWorkspaceRequest,
    responseSerialize: serialize_contentservice_DeleteWorkspaceResponse,
    responseDeserialize: deserialize_contentservice_DeleteWorkspaceResponse,
  },
  // WorkspaceObjectExists checks whether the workspace object exists or not
workspaceObjectExists: {
    path: '/contentservice.WorkspaceService/WorkspaceObjectExists',
    requestStream: false,
    responseStream: false,
    requestType: workspace_pb.WorkspaceObjectExistsRequest,
    responseType: workspace_pb.WorkspaceObjectExistsResponse,
    requestSerialize: serialize_contentservice_WorkspaceObjectExistsRequest,
    requestDeserialize: deserialize_contentservice_WorkspaceObjectExistsRequest,
    responseSerialize: serialize_contentservice_WorkspaceObjectExistsResponse,
    responseDeserialize: deserialize_contentservice_WorkspaceObjectExistsResponse,
  },
};

exports.WorkspaceServiceClient = grpc.makeGenericClientConstructor(WorkspaceServiceService);
