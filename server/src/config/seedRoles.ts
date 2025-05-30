import Role from '../models/Role';

export const seedRoles = async () => {
  const roles = ['superadmin', 'admin', 'user'];

  for (const role of roles) {
    const existingRole = await Role.findOne({ name: role });
    if (!existingRole) {
      await Role.create({ name: role });
      console.log(`${role} role created`);
    }
  }
};
