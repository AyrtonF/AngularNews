import { Router, Request, Response, NextFunction } from 'express';
import admin from '../firebase-config';

const router = Router();

interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

// Middleware ajustado para retorno explícito
const verifyFirebaseToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {  // Adicione ": Promise<void>" para ser explícito
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;  // Retorno explícito para interromper o fluxo
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();  // Chama next() sem retorno
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(403).json({ message: 'Token inválido' });
    // Não é necessário return aqui, mas pode adicionar se preferir
  }
};

// Rota protegida
router.get('/profile', verifyFirebaseToken, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Token válido. Acesso autorizado!',
    user: req.user,
  });
});

export default router;