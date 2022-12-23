module.exports = {
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
        headers: {
          apiKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          // 'Content-Type': 'application/json',
        },
      },
    },
  ],

  // documents: ['./lib/**/*.ts'],
  overwrite: true,
  generates: {
    './lib/supabase/generated/graphql.ts': {
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
      plugins: [
        {
          add: {
            content:
              '\
/* eslint-disable @typescript-eslint/no-explicit-any */\n\
/* eslint-disable @typescript-eslint/naming-convention */\n\
/* eslint-disable @typescript-eslint/ban-types */\n\
',
            // \n\
            // import type { uuid, timestamptz } from "@shared/common/types/common/graphql";\n\
          },
        },
        'typescript',
        'typescript-operations',
      ],
      config: {
        enumsAsTypes: true,
        typesPrefix: 'I',
        skipTypename: false,
        // scalars: {
        //   jsonb: 'any',
        //   timestamptz: 'timestamptz',
        //   uuid: 'uuid',
        // },
      },
    },
  },
};
