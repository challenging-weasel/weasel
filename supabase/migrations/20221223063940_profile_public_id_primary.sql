alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

CREATE UNIQUE INDEX profiles_public_id_key ON public.profiles USING btree (public_id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id, public_id);

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profiles" add constraint "profiles_public_id_key" UNIQUE using index "profiles_public_id_key";


