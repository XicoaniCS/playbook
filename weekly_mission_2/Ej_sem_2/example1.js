console.log("Ejercicio 1.1")

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


console.log("Ejercicio 1.2")

const Issues = {
    title: "Issues LaunchX",
    repositoryNameAssociate: "visual partner ship",
    status: "",
    numberOfComments: "37",
    labels: 9,
    author: "carlogilmar",
    dateCreated: "on 30 Apr",
    lastUpdate: "on 20 Mar",
    getTitleAndAutorIssues: function() {
        return `The title of the repository is ${this.title} and his creator is ${this.author}`
    },
    getGeneralInfoIssues: function() {
        return `there are a total of ${this.numberOfComments}, ${this.labels} labels and ${this.numberOfComments} coments`
    }
}
console.log(Issues.getTitleAndAutorIssues())
console.log(Issues.getGeneralInfoIssues())



console.log("Ejercicio 1.3")

const PullRequest = {
    titlePullRequest: "PullRequest LanchX",
    branchName: "Default Branch",
    dateCreated: "on 35 Feb",
    status: "On branch main Your branch is ahead of 'origin/main' by 1 commit.(use 'git push' to publish your local commits)",
    repositoryNameAssociate: "visual partner ship",
    getTitleAndAutorPullRequest: function() {
        return `The title is ${this.titlePullRequest} and the author is ${this.author}`
    }
}
console.log(PullRequest.status)
console.log(PullRequest.getTitleAndAutorPullRequest())