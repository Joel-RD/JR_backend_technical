import bcrypt from 'bcrypt';

const saltRound = 15;
export const hashGenerator = async(password: string) => {
    try {
        const hash = await bcrypt.hash(password, saltRound)
        return hash;
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password: string, hash:string) => {
    try {
      const compare = await bcrypt.compare(password, hash);
      return compare;
    } catch (error) {
      console.log(error);
    }
  };
