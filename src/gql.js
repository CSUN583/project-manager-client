import {gql} from "apollo-boost";

export const CREATE_USER = gql`
    mutation CreateTeam($name: String!, $email: String!) {
        createUser(input: { name: $name, email: $email, username: "remove", password: "remove" }) {id}
    }
`

export const LIST_USERS = gql`
    query ListUsers {
        users {
            id, 
            name, 
            email,
            teams{
                id
            }
        }
    }`

export const LIST_TEAMS = gql`
    query ListTeams {
        teams {
            id,
            prefix,
            name
        }
    }`

export const CREATE_TEAM = gql`
    mutation CreateTeam($name: String!, $prefix: String!) {
        createTeam(input: { name: $name, prefix: $prefix }) {id}
    }`

export const GET_TEAM_NAME = gql`
    query getTeam($id: ID!){
        team(id: $id) {
            prefix, 
            name,
        }
    }`

export const LIST_TEAM_PROJECTS = gql`
    query listTeamProjects($id: ID!){
        team(id: $id) {
            projects {
                id,
                name,
                description,
                startTime,
                endTime
            }
        }
    }`

export const LIST_TEAM_MEMBERS = gql`
    query listTeamMembers($id: ID!){
        team(id: $id) {
            members {
                id,
                email,
                name
            },
        }
    }`

export const GET_PROJECT_INFO = gql`
    query getProjectInfo($id: ID!){
        project(id: $id) {
            name,
            description,
            startTime,
            endTime,
        }
    }`

export const LIST_PROJECT_TICKETS = gql`
    query listProjectTickets($id: ID!){
        project(id: $id) {
            tickets {
                id,
                name,
                description,
                point,
                status,
            }
        }
    }`

export const GET_TICKET = gql`
    query getTicket($id: ID!){
        ticket(id: $id) {
            name,
            description,
            point,
            status,
        }
    }`

export const GET_USER = gql`
    query getUser($id: ID!){
        user(id: $id) {
            name,
            email,
        }
    }`

export const ADD_USER_TO_TEAM = gql`
    mutation AddUserToTeam($user_id: Int!, $team_id: Int!) {
        addUserToTeam(user_id: $user_id, team_id: $team_id){id}
    }`

export const REMOVE_USER_FROM_TEAM = gql`
    mutation RemoveUserFromTeam($user_id: Int!, $team_id: Int!) {
        removeUserFromTeam(user_id: $user_id, team_id: $team_id){id}
    }`

export const CREATE_PROJECT = gql`
    mutation CreateProject($name: String!, $description: String!, $startTime: String!, $endTime: String!) {
        createProject(input: { name: $name, description: $description, startTime: $startTime, endTime: $endTime }) {id}
    }`

export const ADD_TEAM_TO_PROJECT = gql`
    mutation AddTeamToProject($team_id: Long!, $project_id: Long!) {
        addTeamToProject(team_id: $team_id, project_id: $project_id){id}
    }`

export const REMOVE_TEAM_TO_PROJECT = gql`
    mutation RemoveTeamFromProject($team_id: Long!, $project_id: Long!) {
        removeTeamFromProject(team_id: $team_id, project_id: $project_id){id}
    }`

export const CREATE_TICKET = gql`
    mutation CreateTicket($name: String!, $description: String!, $point: String!, $status: Int!, $projectId: Int!) {
        createTicket(input: { name: $name, description: $description, point: $point, status: $status, projectId: $projectId }) {id}
    }`
