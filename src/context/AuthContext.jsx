import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const DEFAULT_USER = {
  id: 'sarah-jenkins',
  name: 'Sarah Jenkins',
  email: 'sarah.j@littlepaws.io',
  role: 'Pet Parent',
  avatar: 'sarah',
  petName: 'Buddy',
  petBreed: 'Golden Retriever',
  initials: 'SJ'
};

export const GUEST_USER = {
  id: 'alex-rivera',
  name: 'Alex Rivera',
  email: 'alex.rivera@pethub.demo',
  role: 'Guest Parent',
  avatar: 'guest',
  petName: 'Milo',
  petBreed: 'Beagle Pup',
  initials: 'AR'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('pethub_user');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_USER; // Start with active logged-in pet parent by default
  });

  const isAuthenticated = !!user;

  const login = (email, password) => {
    // Basic verification - for demo or any valid email format
    const nameFromEmail = email.split('@')[0]
      .replace(/[._]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    const loggedInUser = {
      id: `usr-${Date.now()}`,
      name: nameFromEmail || 'Sarah Jenkins',
      email: email,
      role: 'Pet Parent',
      avatar: email.includes('sarah') ? 'sarah' : 'custom',
      petName: 'Buddy',
      petBreed: 'Golden Retriever',
      initials: (nameFromEmail || 'SJ').slice(0, 2).toUpperCase()
    };

    setUser(loggedInUser);
    try {
      localStorage.setItem('pethub_user', JSON.stringify(loggedInUser));
    } catch {
      // ignore
    }
    return loggedInUser;
  };

  const quickLogin = (type = 'sarah') => {
    const selected = type === 'guest' ? GUEST_USER : DEFAULT_USER;
    setUser(selected);
    try {
      localStorage.setItem('pethub_user', JSON.stringify(selected));
    } catch {
      // ignore
    }
    return selected;
  };

  const register = ({ name, email, petName, petType }) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: name || 'Loving Pet Parent',
      email: email || 'parent@pethub.com',
      role: 'Pet Parent',
      avatar: 'custom',
      petName: petName || 'Buddy',
      petBreed: petType || 'Golden Retriever',
      initials: (name || 'LP').slice(0, 2).toUpperCase()
    };

    setUser(newUser);
    try {
      localStorage.setItem('pethub_user', JSON.stringify(newUser));
    } catch {
      // ignore
    }
    return newUser;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('pethub_user');
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        quickLogin,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
