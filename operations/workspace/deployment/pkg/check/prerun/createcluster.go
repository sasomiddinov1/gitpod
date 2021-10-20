// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package prerun

import (
	"os"
	"os/exec"

	"github.com/gitpod-io/gitpod/ws-deployment/pkg/common"
)

// CreateClusterPreruns represents preruns before creating a cluster
type CreateClusterPreruns struct {
	Cluster        *common.WorkspaceCluster
	ProjectContext *common.ProjectContext
	PreRuns        []PreRun
}

type clusterDoesNotExistPrerun struct {
	Cluster *common.WorkspaceCluster
}

func (cdnes *clusterDoesNotExistPrerun) Run() error {
	// TODO(prs): Check that when executing, do we need to activate a specific service account here
	cmd := exec.Command("gcloud container clusters describe %s --region %s", cdnes.Cluster.Name, cdnes.Cluster.Region)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		return err
	}
	return nil
}

// CreatePreRuns creates a set of pre runs to be executed before actual creation
// of the cluster. It populates the calling object's `PreRuns` field
func (cp *CreateClusterPreruns) CreatePreRuns() error {
	cp.addClusterDoesNotExistPrerun()
	panic("I am not implemented yet!")
}

func (cp *CreateClusterPreruns) addClusterDoesNotExistPrerun() {
	cp.addGKEClusterDoesNotExistPrerun()
	cp.addK3sClusterDoesNotExistPrerun()
	panic("I am not implemented yet")
}

// Fill this to add a check for gke cluster does not exist
func (cp *CreateClusterPreruns) addGKEClusterDoesNotExistPrerun() {
	if cp.Cluster.ClusterType != common.ClusterTypeGKE {
		return
	}
	cdnes := &clusterDoesNotExistPrerun{cp.Cluster}
	cp.PreRuns = append(cp.PreRuns, cdnes)
}

// Fill this to add a check for k3s cluster does not exist
func (cp *CreateClusterPreruns) addK3sClusterDoesNotExistPrerun() {
	if cp.Cluster.ClusterType != common.ClusterTypeK3s {
		return
	}
	panic("I am not implemented yet")
}
