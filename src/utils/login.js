// TODO: Implement login test functionality
import API from './api';
import { getStorageVar } from './storage';

export async function userLoggedIn() {
  if (getStorageVar('token')) {
    const r = await API.getUser({}, '@me');
    console.log(r);
    // Check data and return based on that
    return true;
  }
  return false;
}
