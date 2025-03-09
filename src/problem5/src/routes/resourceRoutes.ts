import { Router } from "express";
import {
  createResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "../controllers/resourceController";

const router = Router();

/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resource has been created
 */
router.post("/", createResource);

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get list of resources
 *     tags: [Resources]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by name
 *     responses:
 *       200:
 *         description: List of resources
 */
router.get("/", getResources);

/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Get details of resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of resource
 */
router.get("/:id", getResourceById);

/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Update resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       200:
 *         description: Resource has been updated
 */
router.put("/:id", updateResource);

/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Delete resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource has been deleted
 */
router.delete("/:id", deleteResource);

export default router;
