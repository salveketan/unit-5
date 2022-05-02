// action types

export const USER = "USER";

export const adduser = (data) => (
    {
        type: USER,
        payload: data,
    }
);

// Action Creators
