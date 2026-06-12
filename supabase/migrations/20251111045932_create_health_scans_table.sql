/*
  # Create Health Scans Table

  1. New Tables
    - `health_scans`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `scan_date` (timestamp)
      - `tongue_coating` (integer 0-100, toxin level)
      - `face_hydration` (integer 0-100)
      - `pulse_rate` (integer, bpm)
      - `agni_level` (integer 0-100, metabolic fire)
      - `ama_level` (integer 0-100, toxin accumulation)
      - `stress_index` (integer 0-100)
      - `energy_level` (integer 0-100)
      - `recommendations` (text, AI-generated suggestions)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `health_scans` table
    - Add policy for authenticated users to read/write their own scans

  3. Indexes
    - Add index on user_id and scan_date for efficient querying
*/

CREATE TABLE IF NOT EXISTS health_scans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scan_date timestamptz DEFAULT now(),
  tongue_coating integer CHECK (tongue_coating >= 0 AND tongue_coating <= 100),
  face_hydration integer CHECK (face_hydration >= 0 AND face_hydration <= 100),
  pulse_rate integer CHECK (pulse_rate > 0),
  agni_level integer CHECK (agni_level >= 0 AND agni_level <= 100),
  ama_level integer CHECK (ama_level >= 0 AND ama_level <= 100),
  stress_index integer CHECK (stress_index >= 0 AND stress_index <= 100),
  energy_level integer CHECK (energy_level >= 0 AND energy_level <= 100),
  recommendations text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_health_scans_user_date ON health_scans(user_id, scan_date DESC);

ALTER TABLE health_scans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own scans"
  ON health_scans FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own scans"
  ON health_scans FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own scans"
  ON health_scans FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
