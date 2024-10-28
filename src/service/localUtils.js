import apiClient from './apiClient';
import auth from './auth';

async function checkCurrentUserRole() {
  try {
    const token = auth.getToken();
    const decodedToken = auth.decodeToken(token);
    const userId = decodedToken.id;

    const users = await apiClient.getUsers();
    const currentUser = users.find((user) => user.id === userId);

    if (currentUser) {
      return currentUser.role === 'teacher' ? 'teacher' : 'student';
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error checking user role:', error);
    throw error;
  }
}

export default { checkUserRole: checkCurrentUserRole };
