package infra

import (
	"fmt"
	"os/exec"
	"path/filepath"
)

// TFClusterType is the type of cluster to be created e.g. k3s, gke etc
type TFClusterType string

// Environment is the cluster environment i.e. staging, production etc.
type Environment string

const (
	// ClusterTypeGKE represents a cluster of type Google Kubernetes Engine (GKE)
	ClusterTypeGKE TFClusterType = "gke"
	// ClusterTypeK3s represents a kubernetes cluster created using k3s distribution on GCP
	ClusterTypeK3s TFClusterType = "k3s"

	// EnvironmentStaging refers to the staging environment
	EnvironmentStaging Environment = "staging"
	// EnvironmentProduction refers to the production environment
	EnvironmentProduction Environment = "production"

	// DefaultTFModuleGeneratorScriptPath is the path to script that must be invoked
	// from its parent dir in order to generate terraform modules
	DefaultTFModuleGeneratorScriptPath = "dev/build-ws-cluster/build-ws-cluster.sh"

	// DefaultGeneratedTFModulePathTemplate represents the path template where the default module
	// would be generated
	//
	// deploy/{environment}/ws-{prefix}/terraform
	DefaultGeneratedTFModulePathTemplate = "deploy/%s/ws-%s/terraform"

	// DefaultGeneratedArgoCDPathTemplate represents the path template where the default module
	// would be generated
	//
	// deploy/{environment}/ws-{prefix}/terraform
	DefaultGeneratedArgoCDPathTemplate = "deploy/%s/ws-%s/argocd"
)

// TerraformModule defines a set of variables to describe generation of the module and
// input values
//
// ./build-ws-cluster.sh -e production -l europe-west1 -p us89 -t k3s
type TerraformModule struct {
	ClusterType        TFClusterType
	ClusterPrefix      string
	ClusterEnvironment Environment

	Region         string
	ScriptPath     string
	ScriptPathArgs string
}

// CreateTerraformModule creates a terraform module for kubernetes cluster creation and other resources
// required to install gitpod
func (tm *TerraformModule) CreateTerraformModule() error {
	scriptPathDir := filepath.Dir(tm.ScriptPath)
	scriptPathDirName := filepath.Base(scriptPathDir)

	// cd {scriptPathDirName} && ./{ScriptPath} {ScriptPathArgs}
	//
	// e.g.
	// cd dev/build-ws-cluster && ./build-ws-cluster.sh -e production -l europe-west1 -p us89 -t k3s
	//
	// here `-e production -l europe-west1 -p us89 -t k3s` is the args
	commandToRun := fmt.Sprintf(`cd %s && ./%s %s`, scriptPathDirName, tm.ScriptPath, tm.ScriptPathArgs)

	// commandToRun := fmt.Sprintf(`export KUBECONFIG=%s && gcloud container clusters get-credentials %s --project %s --zone %s`, kubeconfigPath, clusterName, projectId, region)
	cmd := exec.Command("/bin/sh", "-c", commandToRun)
	err := cmd.Run()
	stdout, _ := cmd.Output()
	fmt.Print(string(stdout))
	if err != nil {
		return err
	}
	return nil
}

// ApplyTerraformModule does an equivalent of `terraform apply -auto-approve`
func (tm *TerraformModule) ApplyTerraformModule() error {
	panic("Not supported yet!!")
}
