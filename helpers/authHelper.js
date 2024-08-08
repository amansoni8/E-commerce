import bcrypt from "bcrypt";

export const hashPassword = async (paassword) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(paassword, saltRounds);
        return hashedPassword;
    }catch (error){
        console.log(error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};


