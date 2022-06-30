import axios from "axios";
import { Assignment } from "./models/Assignment";
import { Lectures } from "./models/Lectures";
import { User } from "./models/Student";

const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";

type UserResponse = { results: User[] };
export const getStudents = async () => {
  try {
    const response = await axios.get<UserResponse>(
      RandomUser_Base_Url + "?results=9"
    );
    const student = response.data.results;
    return student;
  } catch (e) {
    handleError;
  }
};

export const getLectures = async () => {
  const response = await axios.get<Lectures[]>(
    Codeyogi_Base_Url + `batches/1/sessions`,
    {
      withCredentials: true,
    }
  );
  const lecture = response.data;
  return lecture;
};

export const getAssignments = async () => {
  const response = await axios.get<Assignment[]>(
    Codeyogi_Base_Url + `batches/1/assignments`,
    {
      withCredentials: true,
    }
  );
  const assignment = response.data;
  return assignment;
};

export const getAssignmentNumber = (id: number) => {
  return axios.get(`https://api.codeyogi.io/assignments/${id}`, {
    withCredentials: true,
  });
};

const handleError = (e: any) => {
  console.log("show alert to users", e);
};
