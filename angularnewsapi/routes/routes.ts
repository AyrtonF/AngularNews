
import { Router, Request, Response, NextFunction } from 'express';
import admin from '../firebase-config';

const router = Router();

// Tipagem estendida para o objeto Request com propriedade `user`
interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

// Middleware para verificar o token do Firebase
const verifyFirebaseToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' });

  const token = authHeader.replace('Bearer ', '');

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(403).json({ message: 'Token inválido' });
  }
};

// Rota protegida de exemplo
router.get('/profile', verifyFirebaseToken, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Token válido. Acesso autorizado!',
    user: req.user,
  });
});

export default router;
