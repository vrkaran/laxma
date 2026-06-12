import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface HealthScan {
  id: string;
  scan_date: string;
  tongue_coating: number;
  face_hydration: number;
  pulse_rate: number;
  agni_level: number;
  ama_level: number;
  stress_index: number;
  energy_level: number;
  recommendations: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useScanHistory = (userId?: string) => {
  const [scans, setScans] = useState<HealthScan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchScans = async () => {
      try {
        const { data, error: queryError } = await supabase
          .from('health_scans')
          .select('*')
          .eq('user_id', userId)
          .order('scan_date', { ascending: false })
          .limit(30);

        if (queryError) throw queryError;
        setScans(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch scans');
      } finally {
        setLoading(false);
      }
    };

    fetchScans();
  }, [userId]);

  const saveScan = async (scanData: Omit<HealthScan, 'id' | 'scan_date'> & { user_id: string }) => {
    try {
      const { data, error: insertError } = await supabase
        .from('health_scans')
        .insert([scanData])
        .select()
        .maybeSingle();

      if (insertError) throw insertError;
      if (data) {
        setScans([data, ...scans]);
      }
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to save scan';
      setError(message);
      throw err;
    }
  };

  return { scans, loading, error, saveScan };
};
