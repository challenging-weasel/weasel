/* eslint-disable @typescript-eslint/naming-convention */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      challenges: {
        Row: {
          config: Json;
          created_at: string;
          deleted_at: string | null;
          desc: string | null;
          id: number;
          manager_id: number;
          public_id: string;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          config?: Json;
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          manager_id: number;
          public_id: string;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          config?: Json;
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          manager_id?: number;
          public_id?: string;
          title?: string | null;
          updated_at?: string;
        };
      };
      confirmations: {
        Row: {
          created_at: string;
          creator_id: number;
          date: string;
          deleted_at: string | null;
          desc: string | null;
          id: number;
          images: Json | null;
          participation_id: number;
          status: string;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          creator_id: number;
          date: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          images?: Json | null;
          participation_id: number;
          status: string;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          creator_id?: number;
          date?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          images?: Json | null;
          participation_id?: number;
          status?: string;
          title?: string | null;
          updated_at?: string;
        };
      };
      participations: {
        Row: {
          challenge_id: number;
          config: Json;
          created_at: string;
          deleted_at: string | null;
          desc: string | null;
          id: number;
          profile_id: number;
          status: string;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          challenge_id: number;
          config?: Json;
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          profile_id: number;
          status?: string;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          challenge_id?: number;
          config?: Json;
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          profile_id?: number;
          status?: string;
          title?: string | null;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          desc: string | null;
          id: number;
          name: string | null;
          public_id: string;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          name?: string | null;
          public_id: string;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          desc?: string | null;
          id?: number;
          name?: string | null;
          public_id?: string;
          updated_at?: string;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
