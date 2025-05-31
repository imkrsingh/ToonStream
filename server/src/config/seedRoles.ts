// src/config/seedRoles.ts
import Role from '../models/Role';

export const seedRoles = async () => {
  const roles = ['superadmin', 'admin', 'user'];

  for (const role of roles) {
    const exists = await Role.findOne({ name: role });
    if (!exists) {
      await Role.create({ name: role });
      console.log(`Role ${role} created`);
    }
  }
};
