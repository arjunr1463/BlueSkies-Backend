const express = require("express");
const router = express.Router();
const multer = require("multer");


const {
  createadmin,
  createadminuser,
  adminuserLogin,
  adminuserLogout,
  AdminChangePassword,
  getallAdmin,
  deleteadmin,
} = require("../controllers/adminUser");

const upload = multer({
  limits: {
    fileSize: 1024 * 1024 * 1.5,
  },
});

const {
  createBlog,
  getBlog,
  adminBlogInactive,
  adminBlogEdit,
  adminBlogDelete,
  adminBlogActive,
  createComment,
  getComments,
} = require("../controllers/blog");
const {
  createImage,
  createVideo,
  getAllImages,
  getAllVideos,
  activeImage,
  inactiveImage,
  activeVideo,
  inactiveVideo,
  deleteImage,
  deleteVideo,
} = require("../controllers/gallery");
const { createDetail, createContactDetail } = require("../controllers/joinUs");
const { createNewsletter } = require("../controllers/newsletter");
const {
  createTestimony,
  getAllTestimony,
  adminTestimonyActive,
  adminTestimonyInactive,
  adminTestimonyEdit,
  adminTestimonyDelete,
} = require("../controllers/testimony");
const {
  createUser,
  Login,
  Logout,
  getAllUsers,
  getSingleUser,
  editUser,
  deleteUser,
  deletemultiple,
  ChangePassword,
  getStudentById,
  addstudymaterial,
  getstudymaterial,
} = require("../controllers/user");

router.post("/Blog/createblog", upload.single("image"), createBlog);
router.get("/Blog/createblog", getBlog);
router.post("/createDetails", createDetail);
router.post("/contactus/createDetails", createContactDetail);
router.post("/createnewsletter", createNewsletter);
router.post("/Blog/admin/Inactive/:id", adminBlogInactive);
router.post("/Blog/admin/active/:id", adminBlogActive);
router.put("/Blog/admin/edit/:id", upload.single("image"), adminBlogEdit);
router.delete("/Blog/admin/admindelete/:id", adminBlogDelete);
router.post("/Blog/createComment/:id", createComment);
router.get("/Blog/createComment/:id", getComments);

//user
router.post("/user/createuser", upload.single("image"), createUser);
router.post("/user/studentlogin", Login);
router.post("/user/studentlogout", Logout);
router.post("/user/changepassword", ChangePassword);
router.post("/user/addstudymaterial",upload.single('studyMaterial'),addstudymaterial)
router.get("/user/getAllstudent", getAllUsers);
router.get("/user/getSinglestudent", getSingleUser);
router.get("/user/getStudymaterial/:courseType", getstudymaterial);
router.get("/user/getSinglestudent/admin/:studentId", getStudentById);
router.put("/user/admin/edit/:id", upload.single("image"), editUser);
router.delete("/user/admin/deleteuser/:id", deleteUser);
router.delete("/user/register/stage1/deletemultiple", deletemultiple);

//Testimony
router.post(
  "/Testimony/createTestimony",
  upload.single("image"),
  createTestimony
);
router.get("/Tetsimony/getAllTestimony", getAllTestimony);
router.put("/Testimony/admin/active/:id", adminTestimonyActive);
router.put("/Testimony/admin/Inactive/:id", adminTestimonyInactive);
router.put(
  "/Testimony/admin/edit/:id",
  upload.single("image"),
  adminTestimonyEdit
);
router.delete("/Testimony/admin/delete/:id", adminTestimonyDelete);

//gallery
router.post("/Gallery/createimage", upload.array("images"), createImage);
router.post("/Gallery/createvideo", createVideo);
router.get("/Gallery/getImages", getAllImages);
router.get("/Gallery/getVideos", getAllVideos);
router.put("/Gallery/admin/activeimage/:id", activeImage);
router.put("/Gallery/admin/Inactiveimage/:id", inactiveImage);
router.put("/Gallery/admin/activideo/:id", activeVideo);
router.put("/Gallery/admin/Inactivevideo/:id", inactiveVideo);
router.delete("/Gallery/admin/deleteimage/:id", deleteImage);
router.delete("/Gallery/admin/deletevideo/:id", deleteVideo);

//adminuser
router.post("/adminuser/create", createadminuser);
router.post("/adminuser/login", adminuserLogin);
router.post("/adminuser/adminLogout", adminuserLogout);
router.post("/adminuser/changepassword", AdminChangePassword);
router.get("/adminuser/getadminuser", getallAdmin);
router.delete("/adminuser/deleteadmin/:id", deleteadmin);

module.exports = router;
