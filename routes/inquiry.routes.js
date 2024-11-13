import { Router } from "express";
import { addInquiry, deleteAllInquiries, deleteInquiry, getInquiry } from "../controller/inquiry.controller.js";
import fetchReviews from "../controller/review.controller.js";






const inquiryRoute = Router();

inquiryRoute.post("/", addInquiry);
inquiryRoute.get("/", getInquiry);
inquiryRoute.get("/review", fetchReviews);
inquiryRoute.delete("/:id", deleteInquiry);
inquiryRoute.delete("/delete/all", deleteAllInquiries);

export default inquiryRoute;
