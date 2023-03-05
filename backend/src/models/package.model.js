const query = require("../db/db-connection");
const { multipleColumnSet } = require("../utils/common.utils");
class PackageModel {
  tableName = "packages";

  find = async (params = {}) => {
    let sql = `SELECT * FROM ${this.tableName}`;

    if (!Object.keys(params).length) {
      return await query(sql);
    }

    const { columnSet, values } = multipleColumnSet(params);
    sql += ` WHERE ${columnSet}`;

    return await query(sql, [...values]);
  };

  findOne = async (params) => {
    const { columnSet, values } = multipleColumnSet(params);

    //const sql = `SELECT * FROM ${this.tableName}
    //WHERE ${columnSet}`;

    const sql = `SELECT 
            P.*, 
            CON.title AS country_title, 
            GROUP_CONCAT(C.title separator ',') AS cat 
        FROM 
            jk.package_categories PC 
            LEFT JOIN jk.packages P ON (P.id = PC.package_id) 
            AND P.status = 1 
            LEFT JOIN jk.categories C ON (C.id = PC.category_id) 
            AND C.status = 1 
            LEFT JOIN jk.countries CON ON (P.country_id = CON.id) 
            AND CON.status = 1 
        WHERE 
            ${columnSet} 
        GROUP BY 
            P.id 
        ORDER BY 
            P.title ASC`;

    const sqlImg = `SELECT * FROM jk.package_images WHERE package_id = ${values[0]};`;
    const sqlteniary = `SELECT * FROM jk.package_itineraries WHERE package_id = ${values[0]};`;

    const result = await query(sql, [...values]);
    const ImageRes = await query(sqlImg);
    const Itineraries = await query(sqlteniary);
    if (ImageRes.length > 0) {
      result[0].images = ImageRes;
    }
    if (Itineraries > 0) {
      result[0].itineraries = Itineraries;
    }
    // return back the first row (user)
    return result[0];
  };

  /* create = async ({ first_name, password, email }) => {
        const sql = `INSERT INTO ${this.tableName}
        (first_name, password, email,status,createdAt,updatedAt) VALUES (?,?,?,?,NOW(),NOW())`;

        const result = await query(sql, [first_name, password, email, 1]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE user SET ${columnSet} WHERE id = ?`;

        const result = await query(sql, [...values, id]);

        return result;
    }

    delete = async (id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    } */
}

module.exports = new PackageModel();
