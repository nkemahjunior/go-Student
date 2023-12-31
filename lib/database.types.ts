export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admissionStatus: {
        Row: {
          admittedOrNot: boolean | null
          date: string | null
          faculty: string | null
          studID: string
        }
        Insert: {
          admittedOrNot?: boolean | null
          date?: string | null
          faculty?: string | null
          studID: string
        }
        Update: {
          admittedOrNot?: boolean | null
          date?: string | null
          faculty?: string | null
          studID?: string
        }
        Relationships: [
          {
            foreignKeyName: "admissionStatus_faculty_fkey"
            columns: ["faculty"]
            isOneToOne: false
            referencedRelation: "faculties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admissionStatus_studID_fkey"
            columns: ["studID"]
            isOneToOne: true
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      faculties: {
        Row: {
          created_at: string
          facultyName: string | null
          id: string
        }
        Insert: {
          created_at?: string
          facultyName?: string | null
          id: string
        }
        Update: {
          created_at?: string
          facultyName?: string | null
          id?: string
        }
        Relationships: []
      }
      Profile: {
        Row: {
          admissionAccepted: boolean | null
          admissionType: string | null
          created_at: string
          dateOfBirth: string | null
          department: string | null
          email: string | null
          faculty: string | null
          gender: string | null
          id: string
          maritalStatus: string | null
          name: string | null
          nationality: string | null
          photo: string | null
        }
        Insert: {
          admissionAccepted?: boolean | null
          admissionType?: string | null
          created_at?: string
          dateOfBirth?: string | null
          department?: string | null
          email?: string | null
          faculty?: string | null
          gender?: string | null
          id?: string
          maritalStatus?: string | null
          name?: string | null
          nationality?: string | null
          photo?: string | null
        }
        Update: {
          admissionAccepted?: boolean | null
          admissionType?: string | null
          created_at?: string
          dateOfBirth?: string | null
          department?: string | null
          email?: string | null
          faculty?: string | null
          gender?: string | null
          id?: string
          maritalStatus?: string | null
          name?: string | null
          nationality?: string | null
          photo?: string | null
        }[]
        Relationships: [
          {
            foreignKeyName: "Profile_faculty_fkey"
            columns: ["faculty"]
            isOneToOne: false
            referencedRelation: "faculties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teachers: {
        Row: {
          teacherID: string
          teacherName: string | null
        }
        Insert: {
          teacherID: string
          teacherName?: string | null
        }
        Update: {
          teacherID?: string
          teacherName?: string | null
        }
        Relationships: []
      }
      test: {
        Row: {
          age: string | null
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          age?: string | null
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          age?: string | null
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
