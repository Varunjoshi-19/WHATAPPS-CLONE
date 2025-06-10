import { getPrismaInstance } from "../utils/PrismaClient";
import { Request, Response, NextFunction } from "express"

export const CheckUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email } = req.body;
        console.log(email);
        if (!email) {
            res.status(404).json({ msg: "Email required", status: false });
            return;
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })


        if (!user) {
            res.json({ msg: "User not found", status: false });
            return;
        }

        res.status(202).json({ msg: "User found", status: true, data: user });

    }
    catch (error) {
        next(error);
    }

}


export const onBoardUser = async (req: Request, res: Response, next: NextFunction) => {


    try {

        const { name, email, about, image: profilePicture } = req.body;

        if (!email || !name || !profilePicture) {
            res.send("Email , name and Image are required!");
            return;
        }
        const prisma = getPrismaInstance();
        const user   = await prisma.user.create({
            data: { email, name, about, profilePicture }
        })

        res.json({ msg: "Success", status: true  , user});
        return;

    }
    catch (error) {
        console.log(error);
    }



}