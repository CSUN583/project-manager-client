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
