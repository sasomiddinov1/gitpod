package orchestrate

import (
	"github.com/gitpod-io/gitpod/ws-deployment/pkg/check/prerun"
	"github.com/gitpod-io/gitpod/ws-deployment/pkg/common"
	v1 "github.com/gitpod-io/gitpod/ws-deployment/pkg/config/v1"
	"github.com/gitpod-io/gitpod/ws-deployment/pkg/step"
)

func Deploy(c *v1.Config, environment *common.Environment) {
	createClustersStep := buildCreateClustersStep(c, environment)
	// buildInstallGitpodStep()
	// other steps
	// decide how to run those steps, in parallel?
}

func buildCreateClustersStep(config *v1.Config, environment *common.Environment) []step.Step {
	projectContext := &common.ProjectContext{
		Environment: *environment,
	}
	for _, wc := range config.WorkspaceClusters {
		buildCreateClusterStep(projectContext, &wc)
	}
}

func buildCreateClusterStep(projectContext *common.ProjectContext, workspaceCluster *common.WorkspaceCluster) (step.Step, error) {
	createClusterPreruns := &prerun.CreateClusterPreruns{
		Cluster:        workspaceCluster,
		ProjectContext: projectContext,
	}
	err := createClusterPreruns.CreatePreRuns()
	if err != nil {
		return nil, err
	}
	createClusterStep := &step.CreateClusterStep{
		ProjectContext: projectContext,
		Cluster:        workspaceCluster,
		PreRuns:        createClusterPreruns,
	}
	return createClusterStep, nil
}
