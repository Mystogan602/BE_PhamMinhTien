/**
 * @swagger
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto increment
 *         name:
 *           type: string
 *           description: Name of resource
 *         description:
 *           type: string
 *           description: Description of resource
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Time created
 */
export interface Resource {
  id?: number;
  name: string;
  description?: string;
  created_at?: string;
}
